package com.mytasks;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Incluir esse import
import android.os.Bundle; // Incluir esse import

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "mytasks";
  }
}
