import Script from "next/script"

export default function Head() {
  return (
    <>
      
      <Head>
        
      </Head>
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
