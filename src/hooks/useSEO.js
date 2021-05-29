import {useEffect} from 'react'
export default function useSEO({title}) {
    
    const description="I help you improve your PVP record with "+title
    const author="@Zitrojj"
    useEffect(() => {
        document.title=title
        
        return () => {
            
        }
    }, [title])
    useEffect(() => {
        
        document.querySelector('meta[name="description"]').setAttribute('content', description)
        return () => {
            
        }
    }, [description])
    useEffect(() => {
        
        document.querySelector('meta[name="author"]').setAttribute('content', author)
        return () => {
            
        }
    }, [author])
}
