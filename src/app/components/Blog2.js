import { Modal, useModal, Button, Text, Image, Link } from "@nextui-org/react";
import '@/app/styles/blog.css'


export default function App() {
    const { setVisible, bindings } = useModal();
    return (
        <div>
            <Button auto flat onPress={() => setVisible(true)}>
                Read More...
            </Button>
            <Modal
                scroll
                fullScreen
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Recent Posts
                    </Text>
                </Modal.Header>
                <Modal.Body>



                    <Text id="modal-description">



                        <div class="container">
                            <div className="about-images img-fluid" >
                                <Image className="image_box"
                                    // showSkeleton
                                    // width={300}
                                    height={300}
                                    // maxDelay={10000}
                                    src="/images/bg-boy3.png"
                                    alt="Default Image"
                                /> </div>
                            <h2 className="mt-5">Expert Freelancers: How to Be Successful</h2>
                            <p>Freelancing is a great way to have more control over your work life and earn a living doing what you love. But if you want to be successful as an expert freelancer, there are a few things you need to do.</p>
                            <p>1. Be an expert in your field.</p>
                            <p>This is probably the most important factor in being a successful freelancer. You need to be so good at what you do that people are willing to pay you for your expertise. This means having a deep understanding of your field, as well as the skills and experience to deliver high-quality work.</p>
                            <p>2. Build a strong network.</p>
                            <p>Your network is your most valuable asset as a freelancer. It's how you'll find new clients, get referrals, and stay up-to-date on industry trends. Make sure you're active on social media, attend industry events, and connect with other freelancers in your field.</p>
                            <p>3. Market your services effectively.</p>
                            <p>In today's competitive marketplace, you need to be able to market your services effectively if you want to be successful. This means having a clear understanding of your target audience, as well as the channels you'll use to reach them. You should also have a strong online presence, with a website and social media profiles that showcase your work.</p>
                            <p>4. Be professional and reliable.</p>
                            <p>When you're a freelancer, your reputation is everything. You need to be professional and reliable in order to build trust with your clients and keep them coming back. This means meeting deadlines, delivering high-quality work, and being responsive to client requests.</p>
                            <p>5. Be organized and efficient.</p>
                            <p>As a freelancer, you're responsible for managing your own time and projects. This means being organized and efficient in order to get everything done. Use project management tools, set deadlines for yourself, and delegate tasks as needed.</p>
                            <p>6. Be passionate about your work.</p>
                            <p>If you're not passionate about your work, it will be difficult to be successful as a freelancer. You need to be excited about what you do in order to deliver your best work and keep your clients happy.</p>
                            <p>If you can follow these tips, you'll be well on your way to becoming a successful expert freelancer. So what are you waiting for?
                                <Link href="#">Start today!</Link></p>
                            <Image className="mt-3 mb-3"
                                showSkeleton
                                width={420}
                                height={280}
                                maxDelay={10000}
                                src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Default Image"
                            />
                            <p>Here are some additional tips for expert freelancers:</p>
                            <ul>
                                <li>Set clear rates and terms.&nbsp;Make sure you know what you're worth and that your clients understand your payment terms.</li>
                                <li>Be prepared to negotiate.&nbsp;Don't be afraid to negotiate with clients on rates and terms.</li>
                                <li>Track your time and expenses.&nbsp;This will help you stay on budget and bill your clients accurately.</li>
                                <li>Get paid on time.&nbsp;Have a clear payment schedule in place and follow up with clients if they're late with payments.</li>
                                <li>Build your portfolio.&nbsp;Keep a portfolio of your work to show potential clients.</li>
                                <li>Stay up-to-date on industry trends.&nbsp;Read industry publications, attend conferences, and take online courses to stay ahead of the curve.</li>
                            </ul>
                            <p>Becoming an expert freelancer takes hard work and dedication, but it's definitely possible. If you follow these tips, you'll be well on your way to success.</p>
                        </div>
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button flat auto color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
