
interface FollowerCardProps {
    icon: "facebook" | "youtube" | "instagram" | "twitter"
    header: "Page Views" | "Likes" | "Profile Views" | "Retweets" | "Total Views"
    count: Number
    changeDirection: "up" | "down"
    changePercentage: number
}

export const OverviewCards: FollowerCardProps[] = [
    {
        icon: 'facebook',
        header: 'Page Views',
        count: 87,
        changeDirection: 'up',
        changePercentage: 3,
    },
    {
        icon: 'facebook',
        header: 'Likes',
        count: 52,
        changeDirection: 'down',
        changePercentage: 2,
    },
    {
        icon: 'instagram',
        header: 'Likes',
        count: 5462,
        changeDirection: 'up',
        changePercentage: 2257,
    },
    {
        icon: 'instagram',
        header: 'Profile Views',
        count: 52000,
        changeDirection: 'up',
        changePercentage: 1375,
    },
    {
        icon: 'twitter',
        header: 'Retweets',
        count: 117,
        changeDirection: 'up',
        changePercentage: 303,
    },
    {
        icon: 'twitter',
        header: 'Likes',
        count: 507,
        changeDirection: 'up',
        changePercentage: 553,
    },
    {
        icon: 'youtube',
        header: 'Likes',
        count: 107,
        changeDirection: 'down',
        changePercentage: 19,
    },
    {
        icon: 'youtube',
        header: 'Total Views',
        count: 1407,
        changeDirection: 'down',
        changePercentage: 12,
    }


]