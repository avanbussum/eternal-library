import Link from "next/link"

function Coffee() {
  return (
        <div className="flex justify-center items-center mt-10">
            <Link href="https://www.buymeacoffee.com/ryanvb"
                className="bg-[#d4af37] lg:px-32 px-12 py-3 rounded-full text-lg font-bold 
                text-white hover:bg-[#a5882b]">Coffee? ☕</Link> 
        </div>
        <div>
        <script data-name="BMC-Widget" data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="ryanvb" data-description="Support me on Buy me a coffee!"
        data-message="Thank you for reading!! If you'd like to support me
        staying up into the wee hours of the night to write you more stories,
        buy me a coffee!" data-color="#BD5FFF" data-position="Right"
        data-x_margin="18" data-y_margin="18"></script>
        </div>
  )
}

export default Coffee