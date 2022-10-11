import DropDowns from './dropdown'
import ButtonU from './button'
import SideMenu from './sidemenu'
import LargeNavBar from './largeNavbar'
import { Show, Hide } from '@chakra-ui/react'

const NavBar = () => {
    const breakpoint: string = 'xl'
    return (
        <>
            <div className="font-druk text-indigo bg-white py-2 ">
                <div className="drop-shadow-xl bg-white p-2">
                    <Show below={breakpoint}>
                        <SideMenu />
                    </Show>
                    <Hide below={breakpoint}>
                        <LargeNavBar />
                    </Hide>
                </div>
            </div>
        </>
    )
}

export default NavBar
