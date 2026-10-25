import {
  CalendarHeart,
  Heart,
  HeartHandshake,
  Mail,
  MessagesSquare,
  ShieldCheck,
  Sprout,
} from 'lucide-react'

/** Content files refer to icons by name so they stay free of JSX. */
export const iconMap = {
  heart: Heart,
  heartHandshake: HeartHandshake,
  mail: Mail,
  messagesSquare: MessagesSquare,
  shieldCheck: ShieldCheck,
  sprout: Sprout,
  calendarHeart: CalendarHeart,
}

export function ContentIcon({ name, ...props }) {
  const Icon = iconMap[name] ?? Heart
  return <Icon aria-hidden="true" {...props} />
}
