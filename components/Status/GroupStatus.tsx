"use client";
//import React from "react";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import MemberStatus from "./MemberStatus";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import * as amplitude from "@amplitude/analytics-node";
import { fetchUserStatusInGroup } from "@/actions/functions";
import SectionTitle from "../static/SectionTitle";
import ConfirmGenerate from "./ConfirmGenerate";
import { useGroup } from "@/context/GroupContext";

type Props = {
  state: "Makeyourchoices" | "Changeyourchoices";
  generate?: boolean;
  groupId: number;
};
export type MemberCardProps = {
  fullname: string;
  email?: string;
  profilePicture?: string;
  readiness: "ready" | "busy";
};

// For Monitoring (Amplitude)
const handleRestaurantGenerationButtonClick = () => {
  // Track the event
  amplitude.track("Restaurant Generated Button Clicked", undefined, {
    user_id: "user@amplitude.com",
  });
};
type Member = {
  id: number;
  user_id: number;
  group_id: number;
  isready: boolean | null;
  budget: string | null;
  groups: {
    id: number;
    created_at: string | null;
    name: string | null;
    size: number | null;
  } | null;
  users: {
    id: number;
    firstName: string | null; // Allow null
    lastName: string | null; // Allow null
    profilePicture?: string | null;
  } | null;
};

const GroupStatus: React.FC<Props> = ({ state, generate, groupId }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [groupName, setGroupName] = useState<string>("");
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { groupCode } = useGroup();
  // Fetch members when the component mounts or groupId changes
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersData = await fetchUserStatusInGroup(groupId);
        setMembers(membersData || []);

        // Extract the group name from the first member's group
        if (membersData.length > 0 && membersData[0].groups?.name) {
          setGroupName(membersData[0].groups.name);
        }
      } catch (error) {
        console.error("Failed to fetch group members:", error);
      }
    };

    fetchMembers();
  }, [groupId]); // Dependency array ensures this runs when groupId changes

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(groupCode);
      setIsAnimating(true);
      setShowCopySuccess(true);

      // Hide after 3 seconds
      setTimeout(() => {
        setShowCopySuccess(false);
      }, 3000);

      // Reset animation state after transition ends
      setTimeout(() => {
        setIsAnimating(false);
      }, 3500); // 3000ms + 500ms for animation
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };
  return (
    <div>
      <div className=" mt-2 items-center space-y-4  ">
        {(showCopySuccess || isAnimating) && (
          <div
            className={`fixed left-0 right-0 top-0 bg-[#FF7B5F] text-white py-3 px-6 rounded-md flex items-center justify-center transition-transform duration-500 ease-in-out ${
              showCopySuccess ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <span className="flex items-center gap-2">
              Link copied successfully <span>✓</span>
            </span>
          </div>
        )}
        <h1 className="montserrat mt-10 text-3xl mb-2">
          {groupName || "Loading..."}
        </h1>
        <span>It&apos;s time to invite your members </span>
        <Button
          className=" font-bold text-primary shadow-none border-primary border-2 "
          variant={"outline"}
          onClick={handleCopyCode}
        >
          Copy Code <Link2Icon />
        </Button>
        {/* <Card className=" w-full   h-[417px]  p-3 space-y-3 overflow-y-scroll bg-gray-50 border border-primary  items-center  shadow-md shadow-primary rounded-[20px]">
          {profileCardDummyData.map((item, index) => (
            <MemberStatus member={item} key={`member_status_${index}`} />
          ))}
        </Card> */}
        <Card className="w-full h-[417px] p-3 space-y-3 overflow-y-scroll bg-gray-50 border border-primary items-center shadow-md shadow-primary rounded-[20px]">
          {members.map((member) => (
            <MemberStatus
              key={member.id}
              member={{
                fullname: `${member.users?.firstName || "Unknown"} ${
                  member.users?.lastName || "User"
                }`,
                readiness: member.isready ? "ready" : "busy",
                profilePicture:
                  member.users?.profilePicture || "/avatarpinkwoman.png",
              }}
            />
          ))}
        </Card>
        {state === "Makeyourchoices" && (
          //<Link href={`/Cuisine?groupId=${groupId}`} className="mt-4 block">
          <Link href={`/Cuisine`} className="mt-4 block">
            <Button
              className="font-bold shadow-none border-primary text-primary"
              variant={"outline"}
            >
              Make your choices
            </Button>
          </Link>
        )}
        {/* {generate && (
          <Button
            className="font-bold"
            onClick={() => {
              handleRestaurantGenerationButtonClick();
            }}
          >
            Generate
          </Button>
        )} */}
        {generate && (
          <ConfirmGenerate
            //groupId={groupId} // Pass the groupId to the ConfirmGenerate component
            onConfirm={() => {
              handleRestaurantGenerationButtonClick(); // Track the button click event
              // Add any additional logic here, if necessary
            }}
          />
        )}
        {state === "Changeyourchoices" && (
          // <Button className="font-bold shadow-none" variant={"link"}>
          //   Change your choices
          // </Button>
          //<Link href={`/Cuisine?groupId=${groupId}`} className="mt-4 block">
          <Link href={`/Cuisine`} className="mt-4 block">
            <Button className="font-bold shadow-none" variant={"link"}>
              Change your choices
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GroupStatus;
