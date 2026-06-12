'use client';

import 'react-vertical-timeline-component/style.min.css';
import dynamic from 'next/dynamic';
import {
  PiNumberCircleFive,
  PiNumberCircleFour,
  PiNumberCircleOne,
  PiNumberCircleSix,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from 'react-icons/pi';

const stepIcons = [
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
  PiNumberCircleFive,
  PiNumberCircleSix,
] as const;

const VerticalTimeline = dynamic(
  () =>
    import('react-vertical-timeline-component').then(
      (mod) => mod.VerticalTimeline,
    ),
  { ssr: false },
);

const VerticalTimelineElement = dynamic(
  () =>
    import('react-vertical-timeline-component').then(
      (mod) => mod.VerticalTimelineElement,
    ),
  { ssr: false },
);

type TimelineStep = {
  title: string;
  description: string;
};

type OurPathTimelineProps = {
  steps: TimelineStep[];
};

export function OurPathTimeline({ steps }: OurPathTimelineProps) {
  return (
    <VerticalTimeline lineColor="#6B9080">
      {steps.map((step, index) => {
        const StepIcon = stepIcons[index] ?? PiNumberCircleOne;

        return (
          <VerticalTimelineElement
            key={step.title}
            visible={true}
            contentStyle={{
              background: '#ffffff',
              color: '#4A4A4A',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            }}

            iconStyle={{
              background: '#ffffff',
              color: '#FF7F6F',
              boxShadow: '0 0 0 3px #FF7F6F',
            }}
            icon={<StepIcon className="h-8 w-8" />}
          >
            <h3 className="text-lg font-semibold text-revoducate-sage">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-revoducate-charcoal">
              {step.description}
            </p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
