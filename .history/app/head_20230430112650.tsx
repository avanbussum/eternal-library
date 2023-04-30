import Script from "next/script"

export default function Head() {
  return (
    <>
      
      <title>The Eternal Library</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="images/fthr-removebg-2.png" />
      <script data-name="BMC-Widget" data-cfasync="false"
src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
data-id="ryanvb" data-description="Support me on Buy me a coffee!"
data-message="Thank you for reading!! If you'd like to support me
staying up into the wee hours of the night to write you more stories,
buy me a coffee!" data-color="#BD5FFF" data-position="Right"
data-x_margin="18" data-y_margin="18"></script>

      <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                (function (d, s, id) {
                        var js,
                            el = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {
                            return;
                        }
                        js = d.createElement(s);
                        js.async = true;
                        js.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
                        js.id = id;
                        js.charset = "UTF-8";
                        el.parentNode.insertBefore(js, el);
                })(document, "script", "buymeacoffee-js");
                `,
            }}
        />
    </>
  )
}
