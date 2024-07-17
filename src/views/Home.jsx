import { useEffect, useState } from 'react'
import { getUserInfo, isAuthenticated } from '../utilities/auth.js'
import './Home.css'

export const Home = () => {
    const [activities, setActivities] = useState([])
    const [documents, setDocuments] = useState([])
    const [appointments, setAppointments] = useState([])

    const userInfo = getUserInfo()

    const fetchActivities = async () => {
        const response = await fetch(`http://localhost:8000/activities?userId=${userInfo.id}&_limit=5&_sort=timestamp&_order=desc`)
        const data = await response.json()
        setActivities(data)
    }

    const fetchDocuments = async () => {
        const response = await fetch(`http://localhost:8000/documents?userId=${userInfo.id}`)
        const data = await response.json()
        setDocuments(data)
    }

    const fetchAppointments = async () => {
        const response = await fetch(`http://localhost:8000/appointments?userId=${userInfo.id}&status=pending`)
        const data = await response.json()
        setAppointments(data)
    }

    useEffect(() => {
        if (isAuthenticated()) {
            fetchActivities()
            fetchDocuments()
            fetchAppointments()
        }
    }, [])

    return <article className='home'>
        <h1>Welcome to Death & Money</h1>

        <div className='home__container'>
            <section className='company'>
                <p>At Death & Money, we understand that planning for the future is one of the most important steps you can take for yourself and your loved ones. Our legal practice specializes in estate planning and family trusts, offering personalized services to help you protect your assets and ensure your wishes are honored. With years of experience and a deep commitment to our clients, we provide expert guidance and support every step of the way.</p>

                <h2>Our Mission</h2>
                Our mission is to provide comprehensive and compassionate legal services to individuals and families. We strive to make the process of estate planning straightforward and stress-free, giving you peace of mind knowing that your affairs are in order. Whether you're looking to create a will, set up a trust, or navigate the complexities of probate, our dedicated team is here to assist you.

                <h2>Why Choose Us?</h2>
                Choosing Death & Money means choosing a partner who genuinely cares about your future. We pride ourselves on our client-focused approach, taking the time to understand your unique needs and goals. Our attorneys are not only skilled professionals but also empathetic advisors who are committed to providing you with the highest level of service. Trust us to handle your estate planning with the utmost care and professionalism.
            </section>

            {
                isAuthenticated()
                    ? <section className='userinfo'>
                        <h2>Your Summary</h2>
                        <section className='activities__count'>
                            <p>{activities.length} recent activities</p>
                        </section>

                        <section className='documents__count'>
                            <p>{documents.length} recent documents</p>
                        </section>

                        <section className='appointments__count'>
                            <p>{appointments.length} pending appointments</p>
                        </section>
                    </section>
                    : ""
            }
        </div>

    </article>
}
