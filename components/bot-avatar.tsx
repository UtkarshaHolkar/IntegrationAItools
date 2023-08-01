import {Avatar, AvatarImage} from '@/components/ui/avatar';

export const botAvatar = () => {
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage className='p-1' src='/logo.png'/>
    </Avatar>
  )
}

