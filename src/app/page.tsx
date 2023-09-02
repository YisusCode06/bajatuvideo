import Header from '../components/header/header'
import Downloader from '@/components/downloader/downoloader'
import './page.css'
export default function Home() {
    return (
        <>
            <div className='page h-screen '>
                <Header />
                <div className='downloader m-auto'>
                    <Downloader />
                </div>
            </div>
        </>
    )
}