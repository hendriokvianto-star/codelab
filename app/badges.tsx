import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Platform, Dimensions } from 'react-native';
import Animated, { FadeInDown, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useUserStore } from '@/stores/useUserStore';
import { BADGES } from '@/constants/Gamification';
import Card from '@/components/ui/Card';

const { width, height } = Dimensions.get('window');

export default function BadgesScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { language } = useTranslation();
  
  const earnedBadges = useUserStore((s) => s.earnedBadges);
  const equippedBadge = useUserStore((s) => s.equippedBadge);
  const equipBadge = useUserStore((s) => s.equipBadge);

  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const allBadges = Object.values(BADGES);
  const selectedBadgeData = selectedBadge ? BADGES[selectedBadge as keyof typeof BADGES] : null;
  const isSelectedEarned = selectedBadge ? earnedBadges.includes(selectedBadge) : false;
  const isSelectedEquipped = selectedBadge === equippedBadge;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {language === 'id' ? 'Koleksi Lencana' : 'Badge Collection'}
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.duration(400)}>
          <Card elevated style={styles.statsCard}>
            <Text style={[styles.statsText, { color: colors.text }]}>
              {language === 'id' ? 'Lencana Diperoleh: ' : 'Earned Badges: '}
              <Text style={{ color: colors.primary, fontWeight: '800' }}>
                {earnedBadges.length} / {allBadges.length}
              </Text>
            </Text>
          </Card>
        </Animated.View>

        <View style={styles.badgeGrid}>
          {allBadges.map((badge, index) => {
            const isEarned = earnedBadges.includes(badge.id);
            const isEquipped = badge.id === equippedBadge;
            
            return (
              <Animated.View 
                key={badge.id} 
                entering={FadeInDown.delay(index * 20).duration(300)}
                style={styles.badgeItemWrapper}
              >
                <Pressable 
                  style={[styles.badgeItem, !isEarned && { opacity: 0.5 }]}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setSelectedBadge(badge.id);
                  }}
                >
                  <View style={[
                    styles.badgeIconWrapper, 
                    { 
                      backgroundColor: isEarned ? colors.primary + '15' : colors.border,
                      borderColor: isEquipped ? colors.primary : (isEarned ? colors.primary + '40' : colors.border),
                      borderWidth: isEquipped ? 2.5 : 1.5,
                    }
                  ]}>
                    <Text style={[styles.badgeEmoji, !isEarned && { fontSize: 24, opacity: 0.6 }]}>
                      {isEarned ? badge.emoji : '🔒'}
                    </Text>
                  </View>
                  <Text style={[styles.badgeName, { color: colors.text }]} numberOfLines={2}>
                    {language === 'id' ? badge.nameId : badge.name}
                  </Text>
                  {isEquipped && (
                    <View style={[styles.equippedBadgeTag, { backgroundColor: colors.primary }]}>
                      <Ionicons name="checkmark" size={10} color="#FFF" />
                    </View>
                  )}
                </Pressable>
              </Animated.View>
            );
          })}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Detail Modal / Bottom Sheet */}
      {selectedBadgeData && (
        <View style={styles.modalOverlay}>
          <Pressable style={styles.modalBackdrop} onPress={() => setSelectedBadge(null)} />
          <Animated.View 
            entering={SlideInDown.springify().damping(15)} 
            exiting={SlideOutDown}
            style={[styles.bottomSheet, { backgroundColor: colors.surfaceElevated, borderTopColor: colors.border }]}
          >
            <View style={[styles.sheetHandle, { backgroundColor: colors.border }]} />
            
            <View style={[styles.modalIconWrapper, { backgroundColor: isSelectedEarned ? colors.primary + '15' : colors.background }]}>
              <Text style={styles.modalEmoji}>
                {isSelectedEarned ? selectedBadgeData.emoji : '🔒'}
              </Text>
            </View>
            
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {language === 'id' ? selectedBadgeData.nameId : selectedBadgeData.name}
            </Text>
            
            <Text style={[styles.modalDesc, { color: colors.textSecondary }]}>
              {language === 'id' ? selectedBadgeData.descriptionId : selectedBadgeData.description}
            </Text>

            {isSelectedEarned ? (
              <Pressable
                style={[
                  styles.equipBtn, 
                  { backgroundColor: isSelectedEquipped ? colors.background : colors.primary,
                    borderColor: isSelectedEquipped ? colors.border : colors.primary,
                    borderWidth: 1
                  }
                ]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  if (isSelectedEquipped) {
                    equipBadge(null);
                  } else {
                    equipBadge(selectedBadgeData.id);
                  }
                  setSelectedBadge(null);
                }}
              >
                <Text style={[styles.equipBtnText, { color: isSelectedEquipped ? colors.text : '#FFF' }]}>
                  {isSelectedEquipped 
                    ? (language === 'id' ? 'Lepas Lencana' : 'Unequip Badge')
                    : (language === 'id' ? 'Pakai Lencana' : 'Equip Badge')}
                </Text>
              </Pressable>
            ) : (
              <View style={[styles.lockedState, { backgroundColor: colors.background }]}>
                <Ionicons name="lock-closed" size={16} color={colors.textSecondary} />
                <Text style={[styles.lockedText, { color: colors.textSecondary }]}>
                  {language === 'id' ? 'Belum Terbuka' : 'Not Unlocked Yet'}
                </Text>
              </View>
            )}
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  scrollContent: {
    padding: 20,
  },
  statsCard: {
    marginBottom: 24,
    alignItems: 'center',
    paddingVertical: 16,
  },
  statsText: {
    fontSize: 16,
    fontWeight: '600',
  },
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -5,
  },
  badgeItemWrapper: {
    width: '25%',
    padding: 5,
    marginBottom: 16,
  },
  badgeItem: {
    alignItems: 'center',
    gap: 6,
    position: 'relative',
  },
  badgeIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeEmoji: {
    fontSize: 32,
  },
  badgeName: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 13,
  },
  equippedBadgeTag: {
    position: 'absolute',
    top: 0,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderTopWidth: 1,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 24,
  },
  modalIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  modalEmoji: {
    fontSize: 40,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  equipBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  equipBtnText: {
    fontSize: 16,
    fontWeight: '700',
  },
  lockedState: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
  },
  lockedText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
