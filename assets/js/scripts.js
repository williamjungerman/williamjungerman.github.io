async function copyToClickboard(blockSelector) {
  try {
    const copyValue = document.querySelector(blockSelector).innerText;
    if (!navigator.clipboard) {
      throw new Error("Browser don't have support for native clipboard.");
    }
    await navigator.clipboard.writeText(copyValue);
    const tooltip = document.querySelector(`${blockSelector}-tooltip`);
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
    setTimeout(() => {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = 0;
    }, 1000);
  } catch (error) {
    console.log(error.toString());
  }
}