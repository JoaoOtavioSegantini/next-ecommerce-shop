import { FC, ReactNode } from 'react'
import style from './Marquee.module.css'
import Ticker from 'react-ticker'
import classnames from 'classnames'

interface Props {
  children: ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const rootClassName = classnames(style.root, {
    [style.secondary]: variant === 'secondary'
  })

  return (
    <div className={rootClassName}>
      <Ticker>{() => <div className={style.container}>{children}</div>}</Ticker>
    </div>
  )
}

export default Marquee
