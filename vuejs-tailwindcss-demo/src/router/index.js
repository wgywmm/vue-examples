import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/layout/container',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Container.vue')
  },
  {
    path: '/layout/box-sizing',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/BoxSizing.vue')
  },
  {
    path: '/layout/display',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Display.vue')
  },
  {
    path: '/layout/floats',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Floats.vue')
  },
  {
    path: '/layout/clear',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Clear.vue')
  },
  {
    path: '/layout/object-fit',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ObjectFit.vue')
  },
  {
    path: '/layout/object-position',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ObjectPosition.vue')
  },
  {
    path: '/layout/overflow',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Overflow.vue')
  },
  {
    path: '/layout/overscroll-behavior',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/OverscrollBehavior.vue')
  },
  {
    path: '/layout/position',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Position.vue')
  },
  {
    path: '/layout/top-right-bottom-left',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/TopRightBottomLeft.vue')
  },
  {
    path: '/layout/visibility',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Visibility.vue')
  },
  {
    path: '/layout/z-index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/ZIndex.vue')
  },
  {
    path: '/flexbox/flex-direction',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/FlexDirection.vue')
  },
  {
    path: '/flexbox/flex-wrap',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/FlexWrap.vue')
  },
  {
    path: '/flexbox/flex',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/Flex.vue')
  },
  {
    path: '/flexbox/flex-grow',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/FlexGrow.vue')
  },
  {
    path: '/flexbox/flex-shrink',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/FlexShrink.vue')
  },
  {
    path: '/flexbox/order',
    component: () => import(/* webpackChunkName: "flexbox" */ '@/views/flexbox/Order.vue')
  },
  {
    path: '/grid/grid-template-columns',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridTemplateColumns.vue')
  },
  {
    path: '/grid/grid-column',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridColumn.vue')
  },
  {
    path: '/grid/grid-template-rows',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridTemplateRows.vue')
  },
  {
    path: '/grid/grid-row',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridRow.vue')
  },
  {
    path: '/grid/grid-auto-flow',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridAutoFlow.vue')
  },
  {
    path: '/grid/grid-auto-columns',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridAutoColumns.vue')
  },
  {
    path: '/grid/grid-auto-rows',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/GridAutoRows.vue')
  },
  {
    path: '/grid/gap',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/grid/Gap.vue')
  },
  {
    path: '/box-alignment/justify-content',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/JustifyContent.vue')
  },
  {
    path: '/box-alignment/justify-items',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/JustifyItems.vue')
  },
  {
    path: '/box-alignment/justify-self',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/JustifySelf.vue')
  },
  {
    path: '/box-alignment/align-content',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/AlignContent.vue')
  },
  {
    path: '/box-alignment/align-items',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/AlignItems.vue')
  },
  {
    path: '/box-alignment/align-self',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/AlignSelf.vue')
  },
  {
    path: '/box-alignment/place-content',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/PlaceContent.vue')
  },
  {
    path: '/box-alignment/place-items',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/PlaceItems.vue')
  },
  {
    path: '/box-alignment/place-self',
    component: () => import(/* webpackChunkName: "box-alignment" */ '@/views/box-alignment/PlaceSelf.vue')
  },
  {
    path: '/box-alignment/padding',
    component: () => import(/* webpackChunkName: "spacing" */ '@/views/spacing/Padding.vue')
  },
  {
    path: '/box-alignment/margin',
    component: () => import(/* webpackChunkName: "spacing" */ '@/views/spacing/Margin.vue')
  },
  {
    path: '/box-alignment/space',
    component: () => import(/* webpackChunkName: "spacing" */ '@/views/spacing/SpaceBetween.vue')
  },
  {
    path: '/sizing/width',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/Width.vue')
  },
  {
    path: '/sizing/min-width',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/MinWidth.vue')
  },
  {
    path: '/sizing/max-width',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/MaxWidth.vue')
  },
  {
    path: '/sizing/height',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/Height.vue')
  },
  {
    path: '/sizing/min-height',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/MinHeight.vue')
  },
  {
    path: '/sizing/max-height',
    component: () => import(/* webpackChunkName: "sizing" */ '@/views/sizing/MaxHeight.vue')
  },
  {
    path: '/typography/font-family',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontFamily.vue')
  },
  {
    path: '/typography/font-size',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontSize.vue')
  },
  {
    path: '/typography/font-smoothing',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontSmoothing.vue')
  },
  {
    path: '/typography/font-style',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontStyle.vue')
  },
  {
    path: '/typography/font-weight',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontWeight.vue')
  },
  {
    path: '/typography/font-variant-numeric',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/FontVariantNumeric.vue')
  },
  {
    path: '/typography/letter-spacing',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/LetterSpacing.vue')
  },
  {
    path: '/typography/line-height',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/LineHeight.vue')
  },
  {
    path: '/typography/list-style-type',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/ListStyleType.vue')
  },
  {
    path: '/typography/list-style-position',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/ListStylePosition.vue')
  },
  {
    path: '/typography/placeholder-color',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/PlaceholderColor.vue')
  },
  {
    path: '/typography/placeholder-opacity',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/PlaceholderOpacity.vue')
  },
  {
    path: '/typography/text-align',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextAlignment.vue')
  },
  {
    path: '/typography/text-color',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextColor.vue')
  },
  {
    path: '/typography/text-opacity',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextOpacity.vue')
  },
  {
    path: '/typography/text-decoration',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextDecoration.vue')
  },
  {
    path: '/typography/text-transform',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextTransform.vue')
  },
  {
    path: '/typography/text-overflow',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/TextOverflow.vue')
  },
  {
    path: '/typography/vertical-align',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/VerticalAlignment.vue')
  },
  {
    path: '/typography/whitespace',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/Whitespace.vue')
  },
  {
    path: '/typography/word-break',
    component: () => import(/* webpackChunkName: "typography" */ '@/views/typography/WordBreak.vue')
  },
  {
    path: '/backgrounds/background-attachment',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundAttachment.vue')
  },
  {
    path: '/backgrounds/background-clip',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundClip.vue')
  },
  {
    path: '/backgrounds/background-color',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundColor.vue')
  },
  {
    path: '/backgrounds/background-opacity',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundOpacity.vue')
  },
  {
    path: '/backgrounds/background-position',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundPosition.vue')
  },
  {
    path: '/backgrounds/background-repeat',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundRepeat.vue')
  },
  {
    path: '/backgrounds/background-size',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundSize.vue')
  },
  {
    path: '/backgrounds/background-image',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/BackgroundImage.vue')
  },
  {
    path: '/backgrounds/gradient-color-stops',
    component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/backgrounds/GradientColorStops.vue')
  },
  {
    path: '/borders/border-radius',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/BorderRadius.vue')
  },
  {
    path: '/borders/border-width',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/BorderWidth.vue')
  },
  {
    path: '/borders/border-color',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/BorderColor.vue')
  },
  {
    path: '/borders/border-opacity',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/BorderOpacity.vue')
  },
  {
    path: '/borders/border-style',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/BorderStyle.vue')
  },
  {
    path: '/borders/divide-width',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/DivideWidth.vue')
  },
  {
    path: '/borders/divide-color',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/DivideColor.vue')
  },
  {
    path: '/borders/divide-opacity',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/DivideOpacity.vue')
  },
  {
    path: '/borders/divide-style',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/DivideStyle.vue')
  },
  {
    path: '/borders/ring-width',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/RingWidth.vue')
  },
  {
    path: '/borders/ring-color',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/RingColor.vue')
  },
  {
    path: '/borders/ring-opacity',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/RingOpacity.vue')
  },
  {
    path: '/borders/ring-offset-width',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/RingOffsetWidth.vue')
  },
  {
    path: '/borders/ring-offset-width',
    component: () => import(/* webpackChunkName: "borders" */ '@/views/borders/RingOffsetColor.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
