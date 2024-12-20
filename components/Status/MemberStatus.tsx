//import React from "react";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { MemberCardProps } from "./GroupStatus";
import { getAvatarUrlwithUserId } from "@/actions/avatarfunctions";

type Props = {
  member: MemberCardProps;
};

const MemberStatus = (props: Props) => {
  const { fullname, profilePicture, email, readiness, userId } = props.member;
  const [avatarUrl, setAvatarUrl] = useState<string>("/transparent.png");

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      if (userId) {
        const url = await getAvatarUrlwithUserId(Number(userId));
        if (url) {
          setAvatarUrl(url);
        }
      }
    };

    fetchAvatarUrl();
  }, [userId]);
  return (
    <Card className="rounded-full flex flex-col items-center bg-white w-full p-0">
      <CardContent className=" p-0 px-3 h-[60px] w-full  flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-3">
          <Image
            src={avatarUrl}
            alt={fullname}
            width={36}
            height={36}
            className="rounded-full w-9 h-9 object-cover"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-sm font-medium">{fullname}</h2>
            <p className="text-tiny text-gray-500">{email}</p>
          </div>
        </div>

        <div>
          <p
            className={`text-lg font-bold ${readiness === "ready" ? "text-green-600" : "text-red-600"} capitalize`}
          >
            {readiness}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberStatus;
