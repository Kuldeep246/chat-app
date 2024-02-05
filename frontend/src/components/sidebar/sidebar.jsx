import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const sidebar = () => {
    return (
        <div className='border-r p-4 flex flex-col border-slate-500'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default sidebar
