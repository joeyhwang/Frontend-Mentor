interface CardProps {
    icon: "facebook" | "youtube" | "instagram" | "twitter"
    name: string
    followNumber: number
    followerChange: number,
    followerChangeDirection: "up" | "down"
}
export const Cards: CardProps[]= [
    {
        icon: 'facebook',
        name: 'nathanf',
        followNumber: 1987,
        followerChange: 12,
        followerChangeDirection: 'up'
    },
    {
        icon: 'twitter',
        name: 'nathanf',
        followNumber: 1044,
        followerChange: 99,
        followerChangeDirection: 'up' 
    },
    {
        icon: 'instagram',
        name: 'realnathanf',
        followNumber: 11000,
        followerChange: 1099 ,
        followerChangeDirection: 'up'
    },
    {
        icon: 'youtube',
        name: 'Nathan F.',
        followNumber: 8239,
        followerChange: 144,
        followerChangeDirection: 'down'
    }
]