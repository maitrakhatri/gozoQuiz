type ThumbnailProps = {
    name: string;
    src: string
}

export const Thumbnail = ({ name, src }: ThumbnailProps) => {
    return (<>
        <div className="card card-with-image shadow">
            <div className="card-img">
                <img className="img-res" src={src} alt={name} />
            </div>
            <div className="card-title text-center">
                {name}
            </div>
        </div></>)
}