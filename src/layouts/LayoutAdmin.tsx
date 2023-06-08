import React, { FC } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
interface Props {
    // any props that come into the component
}

const LayoutAdmin: FC<Props> = ({ children, ...props }) => {
    const { is_loggedin } = useSelector((state: RootStateOrAny) => state.login)
    return (
        <div className="">
            <div className='bg-sidebar'>
                Sidebar Components
            </div>
            <div className="" {...props}>{children}</div>
          
        </div>
    )
};

export default LayoutAdmin;