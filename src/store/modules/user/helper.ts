import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'http://cdn.aigrantli.com/%E5%8D%9A%E5%AE%A2/%E5%A4%B4%E5%83%8F/A%203D%20render%20of%20an%20astronaut%20walking%20in%20a%20green%20desert.webp',
      name: 'GrantLi',
      description: '点击浏览 <a href="http://www.aigrantli.com" class="text-blue-500" target="_blank" >个人网站</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
