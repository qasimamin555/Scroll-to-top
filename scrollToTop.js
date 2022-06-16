  scrollToTop = () => {
    // Main target to the div with ref give this to any of Div
    // ref={ (div) => {
    //              this.settingList = div;
    //            } }
    const scrollHeight = this.settingList.scrollHeight;
    const height = this.settingList.clientHeight;
    const maxScrollTop = (height - scrollHeight);
    this.settingList.scrollTop = maxScrollTop < 0 ? maxScrollTop : 0;
  }
