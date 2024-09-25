"use client";

import React, { useState, useEffect } from "react";
import { TextInput, Button, Group, Stack } from "@mantine/core";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import Link from "next/link";

interface UserProfile {
  uuid: string;
  email: string;
  username: string;
  isPremium: boolean;
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const firestore = getFirestore();
        const userRef = doc(firestore, "users", user.uid); // Assume user's data is stored under 'users' collection
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData({
            uuid: user.uid,
            email: data.email,
            username: data.username,
            isPremium: data.isPremium,
          });
        }
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div className="mdmin1050:py-32 py-16 max-w-[1100px] mdmin1050:mx-auto mx-5 min-h-screen">
      <Stack spacing="md">
        <TextInput label="Username" value={userData?.username} readOnly />

        <TextInput label="Email" value={userData?.email} readOnly />

        <TextInput
          label="UUID"
          value={showDetails ? userData?.uuid : "••••••••"}
          rightSection={
            <Button
              size="xs"
              variant="subtle"
              compact
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </Button>
          }
          readOnly
        />
        <TextInput
          label="Current Plan"
          description={
            <Link href="/pricing" className="text-info underline">
              Upgrade your plan
            </Link>
          }
          value={userData?.isPremium ? "Premium" : "Free"}
          readOnly
        />
      </Stack>
    </div>
  );
};

export default ProfilePage;
