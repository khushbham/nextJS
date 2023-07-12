const Popover = () => {
  return (
    <Popover
      placement="bottom"
      isOpen={popoverOpen}
      target="Popover1"
      toggle={() => {
        setPopoverOpen(!popoverOpen);
        setPopoverOpen2(false);
        setPopoverOpen3(false);
        setPopoverOpen4(false);
      }}
    >
      <PopoverBody>
        <div>
          <div className="popup-inner">
            <div className={styles.popupHead}>
              <h2>Like this trend?</h2>
              <p>Sign in to make your opinion count.</p>
            </div>
            <div className={styles.SignInBtn}>
              <Link href={`/signin?redirect_success=${window.location}`}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );
};
