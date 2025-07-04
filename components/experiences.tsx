"use client";

import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Experiences() {
    const { ref } = useSectionInView("Experiences", 0.2);

    return (
        <section
            ref={ref}
            id="experiences"
            className="scroll-mt-16 mx-auto max-w-6xl px-4 sm:px-6 py-20"
        >
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                    My <span className="text-sky-600">Journey</span>
                </h2>
                <div className="w-16 h-1 bg-sky-600 rounded-full mx-auto mt-2 mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    A timeline of my professional experiences and key milestones
                </p>
            </motion.div>

            <VerticalTimeline lineColor="#e5e7eb" className="!w-full">
                {experiencesData.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element"
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(0,0,0,0.05)',
                            padding: '1.5rem',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid rgba(255, 255, 255, 0.8)',
                        }}

                        date={experience.date}
                        dateClassName="text-gray-600 font-medium !mt-1.5"

                        iconStyle={{
                            background: '#0284c7',
                            boxShadow: '0 0 0 4px rgba(2, 132, 199, 0.2)',
                            width: '16px',
                            height: '16px',
                            margin: '-8px 4px 4px -8px',
                            top: '50%',
                            transform: 'mftranslateY(-50%)'
                        }}
                        icon={<></>}
                        visible={true}

                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {experience.title}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                                {experience.description.split('\n').map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}