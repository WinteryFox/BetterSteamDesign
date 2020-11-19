<template>
  <div style="background-image: url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg');">
    <div class="profile-header-bg">
      <div class="profile-header-bg-texture">
        <div class="profile-header">
          <div class="profile-header-content">
            <div class="profile-header-centered-persona">
              <div class="persona-name">
                <label class="actual-persona-name">{{username}}</label>
              </div>

              <div class="header-real-name">
                <bdi>{{realName}}</bdi>
                &nbsp;
                <img class="profile-flag" :src="countryFlag" alt="country flag"/>
                {{countryName}}
              </div>

              <div class="profile-summary">
                {{summary}}
              </div>
            </div>

            <div class="player-avatar profile-header-size online">
              <div class="player-avatar-auto-size-inner">
                <div class="profile-avatar-frame">
                  <img :src="frame" alt="frame"/>
                </div>
                <img :src="avatar" alt="avatar"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --gradient-right: rgba(248, 70, 180, 0.301);
  --gradient-left: rgba(9, 243, 99, 0.247);
  --gradient-background: rgba(46, 13, 36, 0.93);
  --gradient-background-right: rgba(70, 227, 248, 0);
  --gradient-background-left: rgba(239, 243, 9, 0.13);
  --color-showcase-header: rgba(57, 24, 61, 0.93);
  --gradient-showcase-header-left: rgba(20, 60, 68, 0.93);
  --btn-background: rgb(90, 40, 92);
  --btn-background-hover: rgb(100, 50, 102);
  --btn-outline: rgb(140, 90, 142);
}

.profile-header-bg {
  position: relative;
  max-width: 1018px;
  min-height: 224px;
  padding-bottom: 0;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.profile-header-bg-texture {
  max-width: 976px;
  min-height: 224px;
  margin: 0 auto;
  background: radial-gradient(farthest-side at bottom right, var(--gradient-right), transparent 500px), radial-gradient(farthest-corner at bottom left, var(--gradient-left), transparent 600px);
  background-color: var(--gradient-background);
  background-repeat: no-repeat;
  background-position: center;
}

.profile-header {
  position: relative;
  max-width: 926px;
  margin: 0 auto;
  padding-top: 24px;
}

.profile-header-content {
  position: relative;
  padding-top: 8px;
  padding-right: 8px;
  color: #898989;
  font-size: 13px;
}

.profile-header-centered-persona {
  position: absolute;
  left: 186px;
  right: 268px;
  white-space: nowrap;
}

.persona-name {
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 200;
}

.profile-flag {
  vertical-align: middle;
  width: 16px;
  height: 11px;
}

.profile-header .player-avatar.profile-header-size {
  float: left;
  margin-right: 18px;
}

.player-avatar.profile-header-size {
  position: relative;
  width: 166px;
  height: 166px;
}

.player-avatar-auto-size-inner {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
}

.player-avatar .profile-avatar-frame {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.player-avatar.profile-header-size .player-avatar-auto-size-inner {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
}

.playerAvatar.profile-header-size .playerAvatarAutoSizeInner .profile-avatar-frame > img {
  transform: scale(1.22);
}

.playerAvatar.profile-header-size .player-avatar-auto-size-inner img {
  background: none;
  filter: none;
  display: block;
  padding: 0;
  width: 100%;
  height: 100%;
}

.playerAvatar.profile-header-size .player-avatar-auto-size-inner img {
  background: none;
  filter: none;
  display: block;
  padding: 0;
  width: 100%;
  height: 100%;
}

.profile-header .player-avatar.profile-header-size {
  float: left;
  margin-right: 10px;
}

.player-avatar.profile-header-size {
  position: relative;
  width: 166px;
  height: 166px;
}

.player-avatar {
  border-radius: 0;
  padding: 1px;
}

.profile-header .player-avatar.profile-header-size {
  float: left;
  margin-right: 10px;
}

.player-avatar.profile-header-size .player-avatar-auto-size-inner img {
  background: none;
  filter: none;
  display: block;
  padding: 0;
  width: 100%;
  height: 100%;
}

.player-avatar.profile-header-size .player-avatar-auto-size-inner .profile-avatar-frame > img {
  transform: scale(1.22);
}

.profile-header .profile-summary {
  line-height: 18px;
  overflow: hidden;
  margin-bottom: 8px;
  white-space: pre-wrap;
  margin-top: 32px;
  height: 57px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile",

  data() {
    return {
      username: "Amy",
      realName: "Amy",
      countryName: "Japan",
      countryFlag: "https://community.cloudflare.steamstatic.com/public/images/countryflags/jp.gif",
      summary: "１８歳の女の子、オランダ人、美術がすごく興味がある。\n" +
          "３年ぐらい日本語を勉強してる。\n" +
          "ヒー・エヌ・エー ❤❤\n" +
          "\n" +
          "18 year old girl, Dutch, loves art.\n" +
          "Been studying Japanese for about 3 years.\n" +
          "BNA ❤❤",
      avatar: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/93/932f82a64bd3fc512fe9abe32bc00d0928d3cf61_full.jpg",
      frame: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/175875a819256fdeb4a2f4bf1b124afba6c3e2e3.png",
    }
  }
});
</script>
