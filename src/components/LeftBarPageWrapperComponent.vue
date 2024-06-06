<template>
    <div class="leftbar-page-wrapper" ref="pageWrapper">
      <div class="leftbar" >
        <div class="leftbar-filter">
            <button
                class="open-leftbar"
                :style="`margin-top:${leftBarMarginTop}px`"
                title="Abrir filtro"
                alt="Abrir filtro"
                @click.prevent="showSideBar = true"
                :class="showSideBar ? 'toggled' : ''">
                    <span :class="buttomIcon"></span>
            </button>

            <div class="content-filter leftbar-wrapper" :class="showSideBar ? '' : 'toggled'" :style="`width: ${sideBarWidth}px; margin-top:${leftBarMarginTop}px`">
                <div class="leftbar-filter-title">
                    <div v-html="sideBarTitle"></div>
                    <span
                        class="fas fa-times"
                        title="Minimizar filtros"
                        alt="Minimizar filtros"
                        @click.prevent="showSideBar = false"
                        >
                    </span>
                </div>

                <div class="leftbar-body">
                    <slot name="content_leftbar"></slot>
                </div>
            </div>
        </div>
      </div>

      <div class="page-content has-leftbar-component">
        <div>
          <slot name="page_content"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "LeftBarPageWrapperComponent",
  props: {
    sideBarTitle: {
      type: String,
      default: 'Title'
    },

    buttomIcon: {
      type: String,
      default: 'fa-solid fa-person-chalkboard'
    },

    startOpen: {
      type: Boolean,
      default: true
    },

    sideBarWidth: {
      type: Number,
      default: 210
    }
  },
  data() {
    return {
      showSideBar: false,
      leftBarMarginTop: 0,
    }
  },
  computed: {
    paddingLeftContent() {
      return `${parseInt(this.sideBarWidth) + 20}px`
    },

    responsivePaddingLeftContent() {
      return `-${this.sideBarWidth}px`
    }
  },
  mounted() {
    const responsiveShowMenu = (width) => {
      if (width <= 700) {
          this.showSideBar = false;
        } else {
          this.showSideBar = true;
        }
    };

    if(this.startOpen) {
      this.showSideBar = true;
    }
    responsiveShowMenu(window.innerWidth);
    window.addEventListener('resize', () => responsiveShowMenu(window.innerWidth));
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // const leftBarWrapper = document.querySelector('.leftbar-wrapper');
      const scrollPosition = window.scrollY || window.pageYOffset;
      // const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      // const windowHeight = window.innerHeight;

      // Se o scroll for maior que 100px, aplica margin-top de -60px no leftBarWrapper
      if (scrollPosition > 100) {
        this.leftBarMarginTop = -60;
      } else {
        this.leftBarMarginTop = 0;
      }

      // Se o scroll estiver próximo ao final da página, remove o margin-top negativo
      // if ((pageHeight - scrollPosition - windowHeight) < 200) {
      //   this.leftBarMarginTop = 0;
      // }
    }
  },
  watch: {
    showSideBar() {
      if (this.showSideBar) {
        this.$refs.pageWrapper.classList.add('toogled-leftbar');
      } else {
        this.$refs.pageWrapper.classList.remove('toogled-leftbar');
      }
    }
  },
}
</script>

<style scoped>
.leftbar-page-wrapper {
    display: flex;
    flex-direction: row;
}

.leftbar-page-wrapper .page-content {
    display: inline-block;
    width: 100%;
    padding-left: 0px;
    padding-top: 0px;
    overflow-x: hidden;
    min-height: 75vh;
}

.leftbar-page-wrapper .page-content.has-leftbar-component > div {
    padding-left: 40px;
}

.leftbar-page-wrapper.toogled-leftbar .page-content > div {
     padding-left: v-bind(paddingLeftContent);
}

.page-content {
    overflow-y: auto;
}

@media screen and (max-width: 768px) {
    .leftbar-page-wrapper.toogled-leftbar .page-content > div {
        padding-left: v-bind(responsivePaddingLeftContent);
    }
}

.leftbar-filter .open-leftbar {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-purple);
    font-size: var(--font-size-small);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: var(--bg-primary);
    transition: margin-top 0.3s ease;
}

.leftbar-filter .open-leftbar.toggled {
    display: none;
}

.leftbar-wrapper {
    transition: margin-top 0.3s ease;
    position: fixed;
    cursor: auto;
    overflow: visible;
    box-shadow: 0 .46875rem 2.1875rem rgba(4, 9, 20, .03), 0 .9375rem 1.40625rem rgba(4, 9, 20, .03), 0 .25rem .53125rem rgba(4, 9, 20, .05), 0 .125rem .1875rem rgba(4, 9, 20, .03);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    height: 100%;
    padding-bottom: 102px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 13px 0px 13px;
    background-color: var(--color-bg-100);
    z-index: 1;
}

.leftbar-wrapper.toggled {
    display: none;
}

.leftbar-filter .leftbar-filter-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    z-index: 10;
}

.leftbar-filter .leftbar-filter-title span {
    margin-top: 3px;
    margin-right: -6px;
    font-size: var(--font-size-small);
}

.leftbar-filter .leftbar-filter-title h3 {
    margin: 0px;
    padding: 0;
    float: left;
    color: var(--font-primary);
    font-family: var(--font-family-primary);
    font-weight: bold;
    font-size: var(--font-size-medium);
    box-shadow: none;
    margin-bottom: 0px;
    letter-spacing: var(--letter-spacing);
}

.leftbar-filter .leftbar-filter-title .fa-times {
    color: var(--nav-menu-li);
    cursor: pointer;
    font-size: 15px;
}

.leftbar-body {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>