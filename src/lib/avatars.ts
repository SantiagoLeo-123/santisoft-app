import { AVATAR_PRESETS } from '@/types';

export function getAvatarSrc(avatar: string): { type: 'image' | 'preset'; value: string } {
  if (avatar.startsWith('data:') || avatar.startsWith('http')) {
    return { type: 'image', value: avatar };
  }
  return { type: 'preset', value: avatar };
}

export function getPresetColor(avatarId: string): string {
  const preset = AVATAR_PRESETS.find((p) => p.id === avatarId);
  return preset?.color ?? '#dc2626';
}
