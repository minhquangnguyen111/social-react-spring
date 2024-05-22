import React, { useEffect } from 'react';
import SearchUser from '../SearchUser/SearchUser';
import PopularUserCard from './PopularUserCard';
import { Card } from '@mui/material';

const HomeRight = ({ popularUsers, onFollowUser, loggedInUserId }) => {
    useEffect(() => {
        // Thực hiện các tác vụ cần thiết khi có sự thay đổi trong popularUsers
    }, [popularUsers]);
    return (
        <div className='pr-1 '>
            <SearchUser />
            <Card className='p-5 '>
                <div className='flex justify-between py-5 items-center'>
                    <p className='font-semibold opacity-70'>Suggestions for you</p>
                    <p className='text-xs font-semibold opacity-95'>View All</p>
                </div>
                <div className=''>
                    {popularUsers.map((user) => (
                        <PopularUserCard
                            // key={user.id}
                            user={user}

                            onFollowUser={() => onFollowUser(user.id)}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default HomeRight;
