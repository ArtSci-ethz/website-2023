<div class="gg-arrow-long-right" />

<style>
  /* Thanks to https://css.gg/arrow-long-right */
  .gg-arrow-long-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    width: 100%;
    height: 6px;
  }

  .gg-arrow-long-right::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    right: 0;
    bottom: -2px;
  }
</style>
