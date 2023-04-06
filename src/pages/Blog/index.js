import BlogComponent from "../../components/Blog"
import MeetThePartners from "../../components/MeetThePartners"

export default function Blog () {
  return (
    <>
      <main>
        <section>
          <BlogComponent/>
        </section>
        <section>
          <MeetThePartners/>
        </section>
      </main>
    </>
  )
}