import * as Style from './index.styled'

interface SortByProps {
    variant: string
    setVariant: (variant: string) => void
}

export const SortBar = ({ variant, setVariant }: SortByProps) => {
    return (
        <Style.SortBy>
            <Style.Item
                onClick={() => {
                    setVariant(variant === 'rating' ? '' : 'rating')
                }}
            >
                <div
                    style={{
                        background: variant === 'rating' ? '#008ee0' : '',
                        width: variant === 'rating' ? '150px' : '',
                        height: variant === 'rating' ? '30px' : '',
                        borderRadius: variant === 'rating' ? '10px' : '',
                        justifyContent: variant === 'rating' ? 'center' : '',
                        display: variant === 'rating' ? 'flex' : '',
                        alignItems: variant === 'rating' ? 'center' : '',                       
                        
                    }}
                >
                    High rating
                </div>
            </Style.Item>
            
            <Style.Item
                onClick={() => {
                    setVariant(
                        variant === 'download_count' ? '' : 'download_count'
                    )
                }}
            >
                <div
                    style={{
                        background: variant === 'download_count' ? '#008ee0' : '',
                        width: variant === 'download_count' ? '150px' : '',
                        height: variant === 'download_count' ? '30px' : '',
                        borderRadius: variant === 'download_count' ? '10px' : '',
                        justifyContent: variant === 'download_count' ? 'center' : '',
                        display: variant === 'download_count' ? 'flex' : '',
                        alignItems: variant === 'download_count' ? 'center' : '',                       
                        
                    }}
                >
                    By download count
                </div>
            </Style.Item>
        </Style.SortBy>
    )
}
export default SortBar;

