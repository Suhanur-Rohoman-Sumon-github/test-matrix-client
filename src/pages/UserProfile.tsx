import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useCurrentUser } from "@/utils/getCurrentUser";

const UserProfile = () => {
  const user = useCurrentUser();

  // Local state to edit user info
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  // Simple submit handler (extend this with real API call)
  const handleSave = () => {
    // TODO: Call API to update user info here
    setIsEditing(false);
    alert("User info updated! (mock)");
  };

  if (!user) {
    return <p className="text-center p-10">Loading user data...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-32">
      <Card className="glow-border glass-card p-6">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">User Profile</CardTitle>
          <CardDescription className="mb-6">
            Manage your account information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Avatar */}
            <div className="flex items-center space-x-6">
              <img
                src={`https://ui-avatars.com/api/?name=${name}`}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-purple-600"
              />
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                ) : (
                  <h2 className="text-2xl font-semibold">{name}</h2>
                )}
                {!isEditing && (
                  <p className="text-muted-foreground text-sm">{email}</p>
                )}
              </div>
            </div>

            {/* Email */}
            {isEditing && (
              <div className="flex flex-col max-w-xs">
                <label className="mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                />
              </div>
            )}

            {/* Buttons */}
            <div className="space-x-4">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
