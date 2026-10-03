import { useState } from 'react';
import { Plus, Pencil, Check, X, Trash2, User } from 'lucide-react';
import type { UserProfile } from '@/types';
import { getAvatarSrc, getPresetColor } from '@/lib/avatars';

interface ProfileScreenProps {
  profiles: UserProfile[];
  onSelectProfile: (profileId: string) => void;
  onAddProfile: (name: string, avatar: string) => void;
  onUpdateProfile: (profileId: string, name: string, avatar: string) => void;
  onDeleteProfile: (profileId: string) => void;
}

export function ProfileScreen({
  profiles,
  onSelectProfile,
  onAddProfile,
  onUpdateProfile,
  onDeleteProfile,
}: ProfileScreenProps) {
  const [managing, setManaging] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<UserProfile | null>(null);

  const openAddModal = () => {
    setEditingProfile(null);
    setModalOpen(true);
  };

  const openEditModal = (profile: UserProfile) => {
    setEditingProfile(profile);
    setModalOpen(true);
  };

  const handleSave = (name: string, avatar: string) => {
    if (editingProfile) {
      onUpdateProfile(editingProfile.id, name, avatar);
    } else {
      onAddProfile(name, avatar);
    }
    setModalOpen(false);
  };

  const handleDelete = (profileId: string) => {
    onDeleteProfile(profileId);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto scrollbar-thin animate-home-fade-in">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
        {managing ? 'Gerenciar Perfis' : 'Quem está assistindo?'}
      </h1>
      <p className="text-sm text-zinc-500 mb-10 text-center">
        {managing ? 'Edite ou remova perfis existentes' : 'Selecione um perfil para continuar'}
      </p>

      {/* Profile grid */}
      <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 max-w-2xl">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            managing={managing}
            onSelect={() => !managing && onSelectProfile(profile.id)}
            onEdit={() => openEditModal(profile)}
            onDelete={() => handleDelete(profile.id)}
          />
        ))}

        {/* Add profile button */}
        {profiles.length < 4 && !managing && (
          <button
            onClick={openAddModal}
            className="group flex flex-col items-center gap-3"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-dashed border-ink-850 group-hover:border-red-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ink-850 group-hover:bg-red-600 transition-colors duration-300">
                <Plus className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Adicionar Perfil
            </span>
          </button>
        )}
      </div>

      {/* Manage profiles button */}
      {profiles.length > 0 && (
        <button
          onClick={() => setManaging((m) => !m)}
          className="mt-12 px-6 py-2.5 rounded-xl text-sm font-medium border border-ink-850 text-zinc-400 hover:text-white hover:border-red-600 transition-all"
        >
          {managing ? (
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Concluir
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Pencil className="w-4 h-4" />
              Gerenciar Perfis
            </span>
          )}
        </button>
      )}

      {/* Modal */}
      {modalOpen && (
        <ProfileModal
          profile={editingProfile}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

interface ProfileCardProps {
  profile: UserProfile;
  managing: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

function ProfileCard({ profile, managing, onSelect, onEdit, onDelete }: ProfileCardProps) {
  const avatar = getAvatarSrc(profile.avatar);
  const color = avatar.type === 'preset' ? getPresetColor(avatar.value) : '#dc2626';

  return (
    <div className="group flex flex-col items-center gap-3">
      <div className="relative">
        <button
          onClick={onSelect}
          disabled={managing}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 disabled:cursor-default"
        >
          {avatar.type === 'image' ? (
            <img src={avatar.value} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${color}cc, ${color}66)` }}
            >
              <User className="w-10 h-10 text-white/80" />
            </div>
          )}
          {/* Overlay on hover when not managing */}
          {!managing && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white rotate-45" />
                </div>
              </div>
            </div>
          )}
        </button>

        {/* Managing overlay buttons */}
        {managing && (
          <div className="absolute -top-2 -right-2 flex gap-1">
            <button
              onClick={onEdit}
              className="w-8 h-8 rounded-full bg-ink-850 border border-ink-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
              title="Editar perfil"
            >
              <Pencil className="w-3.5 h-3.5 text-zinc-300" />
            </button>
            <button
              onClick={onDelete}
              className="w-8 h-8 rounded-full bg-ink-850 border border-ink-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
              title="Excluir perfil"
            >
              <Trash2 className="w-3.5 h-3.5 text-zinc-300" />
            </button>
          </div>
        )}
      </div>

      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors max-w-[7rem] truncate text-center">
        {profile.name}
      </span>
    </div>
  );
}

// --- Profile Modal ---

import { useRef } from 'react';
import { AVATAR_PRESETS } from '@/types';

interface ProfileModalProps {
  profile: UserProfile | null;
  onSave: (name: string, avatar: string) => void;
  onClose: () => void;
}

function ProfileModal({ profile, onSave, onClose }: ProfileModalProps) {
  const [name, setName] = useState(profile?.name ?? '');
  const [avatar, setAvatar] = useState(profile?.avatar ?? 'avatar-1');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setError('Imagem muito grande (máx 2MB)');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const trimmed = name.trim();
    if (trimmed.length < 1) {
      setError('Digite um nome');
      return;
    }
    if (trimmed.length > 20) {
      setError('Máximo 20 caracteres');
      return;
    }
    onSave(trimmed, avatar);
  };

  const currentAvatar = getAvatarSrc(avatar);
  const currentColor = currentAvatar.type === 'preset' ? getPresetColor(avatar) : '#dc2626';

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-md bg-ink-900 border border-ink-850 rounded-2xl p-6 sm:p-8 animate-home-card-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">
            {profile ? 'Editar Perfil' : 'Adicionar Perfil'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Avatar preview */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden mb-3 border border-ink-850">
            {currentAvatar.type === 'image' ? (
              <img src={avatar} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${currentColor}cc, ${currentColor}66)` }}
              >
                <User className="w-8 h-8 text-white/80" />
              </div>
            )}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-xs text-red-500 hover:text-red-400 font-medium transition-colors"
          >
            Enviar foto do dispositivo
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Avatar presets */}
        <div className="mb-6">
          <p className="text-xs text-zinc-500 mb-3">Ou escolha um avatar:</p>
          <div className="grid grid-cols-4 gap-3">
            {AVATAR_PRESETS.map((preset) => {
              const isSelected = avatar === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setAvatar(preset.id)}
                  className={`relative w-full aspect-square rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'ring-2 ring-red-600 scale-105'
                      : 'ring-1 ring-ink-850 hover:ring-ink-800'
                  }`}
                  style={{ background: `linear-gradient(135deg, ${preset.color}cc, ${preset.color}66)` }}
                >
                  <User className="w-5 h-5 text-white/80" />
                  {isSelected && (
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name input */}
        <div className="mb-5">
          <label className="text-xs text-zinc-500 mb-2 block">Nome do perfil</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            placeholder="Ex: Dr. Silva"
            maxLength={20}
            className="w-full px-4 py-3 rounded-xl bg-ink-850 border border-ink-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
            autoFocus
          />
          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl text-sm font-medium bg-ink-850 text-zinc-300 hover:bg-ink-825 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            {profile ? 'Salvar' : 'Criar Perfil'}
          </button>
        </div>
      </div>
    </div>
  );
}
