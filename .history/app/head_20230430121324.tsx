import Script from "next/script"

export default function Head() {
  return (
    <>
      
      <title>The Eternal Library</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="images/fthr-removebg-2.png" />
      <Script
            strategy="beforeInteractive"
            defer={false}
            data-name="BMC-Widget" 
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="ryanvb" 
            data-description="Support me on Buy me a coffee!"
            data-message="Thank you for reading!! If you'd like to support me
            staying up into the wee hours of the night to write you more stories,
            buy me a coffee!" 
            data-color="#BD5FFF" 
            data-position="Right"
            data-x_margin="10" 
            data-y_margin="10">
        </Script>
    </>
  )
}
