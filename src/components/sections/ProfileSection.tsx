import ProfileCard from "@/components/ui/ProfileCard";
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  miniAvatarUrl="/path/to/avatar.jpg"
  iconUrl="/placeholder.svg"
  grainUrl="/placeholder.svg"
  behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%)"
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>