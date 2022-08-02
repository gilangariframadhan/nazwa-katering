import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';

export default function Homepage(props) {
    console.log('props', props)
    return (
        <div>
            <Navbar user={props.auth.user} />
            <Head title={props.title} />
            <h1>{props.description}</h1>
        </div>
    )
}