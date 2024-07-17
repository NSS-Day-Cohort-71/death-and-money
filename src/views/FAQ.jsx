import { useEffect, useState } from 'react'
import { getUserInfo } from '../utilities/auth.js'
import './Home.css'

export const FAQ = () => {
    const [faqs, setFAQs] = useState([])
    const [documents, setDocuments] = useState([])
    const [appointments, setAppointments] = useState([])

    const userInfo = getUserInfo()
    const fetchFAQs = async () => {
        const response = await fetch(`http://localhost:8000/faqs`)
        const data = await response.json()
        setFAQs(data)
    }

    useEffect(() => {
        fetchFAQs()
    }, [])

    return <article className='faqs'>
        <h1>Frequently Asked Questions</h1>

        {
            faqs.map(faq => {
                return <section className='faq'>
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                </section>
            })
        }
    </article>
}
