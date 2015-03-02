# What is a Singleton?

From Wikipedia:

> In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

## Instantiating a Singleton

Singletons can only have one instance in the whole application. This is achieved via a private constructor and a `getInstance()` method.

```java
public class SampleSingleton {
    private static SampleSingleton instance = null;
    private SampleSingleton() {

    }
    public static SampleSingleton getInstance() {
        if(instance == null) instance = new SampleSingleton();
        return instance;
    }
}
```

## Problem with concurrency
Sometimes, when using a singleton we can find problems with concurrency. These occur when two threads simultaneously try to access the single instance returned by `getInstance()`.

Both threads lock the resource, and they enter into **deadlock**. Programming languages often provide ways around this, with syntax to lock the resource before it is used, but it can be a problem for newer programmers.

A way to prevent these concurrency problems in Java is to synchronize the instantiation of the Singleton:

```java
public class SampleSingleton {
    private static SampleSingleton instance = null;
    private SampleSingleton() {

    }
    public static SampleSingleton getInstance() {
        if(instance == null) {
            synchronized(SampleSingleton.class) {
                instance = new SampleSingleton();
            }
        }
        return instance;
    }
}
```

Even this way of doing it isn't perfectly safe, however. The only way to guarantee 100% that the class is thread-safe is to make the instance `static`, and instantiate it as a class variable:

```java
public class SampleSingleton {
    private static final SampleSingleton INSTANCE = new SampleSingleton();
    private SampleSingleton() {
    
    }
}
```

And then accessing the instance like so:

```java
...
SampleSingleton singleton = SampleSingleton.INSTANCE;
...
```

## Subclassing a singleton
Subclassing a singleton may be interesting if there are properties we want to be be able to change, while the singleton still remains a globally accessible object.

For example, if we had a `FileSystem` singleton, we could subclass it to `PS3FileSystem` or `XboxFileSystem`, depending on which platform we are using.

```cpp
FileSystem& FileSystem::instance()
{
  #if PLATFORM == PLAYSTATION3
    static FileSystem *instance = new PS3FileSystem();
  #elif PLATFORM == WII
    static FileSystem *instance = new WiiFileSystem();
  #endif

  return *instance;
}
```

## Regretting the singleton
Many people are against singletons (and global variables as a whole). There are a few reasons for this[^1], such as:

1. Make code harder to understand, because calling `SomeClass.getGlobalData()` introduces a dependency on a function that should otherwise be self-contained.
2. They encourage coupling: calling your global `AudioEngine` singleton from a `Physics` class sounds like a terrible idea, but not if you don't know any better.
3. The concurrency problems mentioned above.

## What can we use instead?

```cpp
class Bullet
{
public:
  int getX() const { return x_; }
  int getY() const { return y_; }

  void setX(int x) { x_ = x; }
  void setY(int y) { y_ = y; }

private:
  int x_, y_;
};

class BulletManager
{
public:
  Bullet* create(int x, int y)
  {
    Bullet* bullet = new Bullet();
    bullet->setX(x);
    bullet->setY(y);

    return bullet;
  }

  bool isOnScreen(Bullet& bullet)
  {
    return bullet.getX() >= 0 &&
           bullet.getX() < SCREEN_WIDTH &&
           bullet.getY() >= 0 &&
           bullet.getY() < SCREEN_HEIGHT;
  }

  void move(Bullet& bullet)
  {
    bullet.setX(bullet.getX() + 5);
  }
};
```

In the example above, someone was using a `Bullet` class to hold data about a bullet, like its `x` and `y` location. They were then using a `BulletManager` class to move the bullet. This is an extreme example, but nevertheless worth exploring.

An obvious solution below:

```cpp
class Bullet
{
public:
  Bullet(int x, int y) : x_(x), y_(y) {}

  bool isOnScreen()
  {
    return x_ >= 0 && x_ < SCREEN_WIDTH &&
           y_ >= 0 && y_ < SCREEN_HEIGHT;
  }

  void move() { x_ += 5; }

private:
  int x_, y_;
};
```

There was no need for `BulletManager` in the first place!

### Use something already global
Usually, games will have an unavoidable singleton, like **`Game`**, or **`World`**. Often it is better to have these singletons contain things like `FileSystem`, `AudioEngine`, `Log`, or others.

### Pass it as a parameter!
It can be cumbersome, but it can also be a good solution. **Android** passes a `Context` class nearly everywhere. Are our games going to be that large and complex that passing a couple parameters here and there is too difficult?

In order to pass it as a parameter everywhere, the Google Testing Blog[^2] recommends using an `ApplicationFactory` class, which will instantiate the necessary classes. You will only create one instance of an `ApplicationFactory` class in the `main()` method.

[^1]: http://gameprogrammingpatterns.com/singleton.html#why-we-regret-using-it
[^2]: http://googletesting.blogspot.co.uk/2008/08/where-have-all-singletons-gone.html