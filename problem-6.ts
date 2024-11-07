// Create Profile interface
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }
  
  const myProfile: Profile = { name: "Rakib", age: 35, email: "Rakib@gmail.com" };
  
  console.log(updateProfile(myProfile, { age: 36 }));
  