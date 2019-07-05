import moment from 'moment'
export const dateMixin = {
  methods: {
    formatDate(str) {
      return moment(str).format('YYYY-MM-DD HH:mm:ss')
    },

    diffForHumans(str) {
      return moment(str).fromNow()
    }
  }
}