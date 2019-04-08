<template>
  <f7-page>
    <f7-navbar title="About" back-link="Back"></f7-navbar>
    <f7-block-title>About My App</f7-block-title>
    <f7-block strong>
      <p>{{this.$store.state.biaoti}}</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
    <f7-block>
      <p>Photo Browser could be opened in a three ways - as a Standalone component (Popup modification), in Popup, and as separate Page:</p>
      <f7-row>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            ref="standalone"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.standalone.open()">Standalone</f7-button>
        </f7-col>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            type="popup"
            ref="popup"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.popup.open()">Popup</f7-button>
        </f7-col>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            type="page"
            back-link-text="Back"
            ref="page"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.page.open()">Page</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block>
      <p>Photo Browser suppots 2 default themes - default Light (like in previous examples) and Dark theme. Here is a Dark theme examples:</p>
      <f7-row>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            theme="dark"
            ref="standaloneDark"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.standaloneDark.open()">Standalone</f7-button>
        </f7-col>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            theme="dark"
            type="popup"
            ref="popupDark"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.popupDark.open()">Popup</f7-button>
        </f7-col>
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            theme="dark"
            type="page"
            back-link-text="Back"
            ref="pageDark"
          ></f7-photo-browser>
          <f7-button raised @click="$refs.pageDark.open()">Page</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          url: 'img/beach.jpg',
          caption: 'Amazing beach in Goa, India',
        },
        'http://placekitten.com/1024/1024',
        'img/lock.jpg',
        {
          url: 'img/monkey.jpg',
          caption: 'I met this monkey in Chinese mountains',
        },
        {
          url: 'img/mountains.jpg',
          caption: 'Beautiful mountains in Zhangjiajie, China',
        },
      ],
    }
  },
  created() {
    var that = this;
      console.log(that.$f7.view)
  },
}
</script>
