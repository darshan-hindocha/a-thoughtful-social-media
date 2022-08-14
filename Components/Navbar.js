import Link from './Link';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const STYLES = {
    NAV_ITEM: "cursor-pointer flex bg-gray-300 p-2 border-[1px] border-gray-400 rounded-md hover:bg-red-200"
}

const Navbar = () => {
    return (
        <nav className="flex bg-gray-200">
            <div className="flex justify-between w-full px-10 py-6">
                <div className="p-2">
                    <Link href="/">
                        <BubbleChartIcon/>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/discover">
                        <div className={STYLES.NAV_ITEM}>
                            <QueryStatsIcon />
                            <p>Discover</p>
                        </div>
                    </Link>
                    <Link href="/editor">
                        <div className={STYLES.NAV_ITEM}>
                            <EditIcon/>
                            <p>Editor</p>
                        </div>
                    </Link>
                    <Link href="/feed">
                        <div className={STYLES.NAV_ITEM}>
                            <FeedIcon/>
                            <p>Feed</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;