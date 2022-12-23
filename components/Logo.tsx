import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full object-cover"
                height={50}
                width={50}
                src="https://api.time.com/wp-content/uploads/2014/09/macaca_nigra_self-portrait_rotated_and_cropped.jpg?quality=85&w=666&h=628&crop=1"
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo