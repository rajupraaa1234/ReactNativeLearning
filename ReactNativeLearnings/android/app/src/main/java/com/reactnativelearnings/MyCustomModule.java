package com.reactnativelearnings;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyCustomModule extends ReactContextBaseJavaModule {

    public static ReactApplicationContext applicationContext;

    MyCustomModule(ReactApplicationContext context){
        super(context);
        applicationContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "MyCustomModule";
    }

    @ReactMethod
    public void MyCustomMethod() {
        Log.d("MyCustomMethod","called");
    }

    @ReactMethod
    public void MyMessage(String str) {
        Log.d("MyMessage",str);
    }
}
