import { Typography } from "@/components/Typography";

export function Hero() {
  return (
    <div className="bg-basewhite-100 flex lg:flex-row flex-col justify-between lg:px-40 px-10 py-[200px]">
      <div className="flex flex-col">
        <Typography variant="overline" >His life metro</Typography>
        <Typography variant="h1">
          LOVE GOD.<br className="lg:block hidden" /> MAKE DISCIPLES.<br className="lg:block hidden" /> IMPACT OUR WORLD.
        </Typography>
        <Typography variant='paragraph_md'>
          This is how we know what love is: Jesus Christ laid down his life for us.
          And we ought to <br /> lay down our lives for our brothers and sisters.
          <br />- 1 John 3:16 (NIV)
        </Typography>
      </div>
      <img className={``} src="/uploads/dark_hislife.png" alt="Description of the image" />
    </div>
  )
}