# Creational Pattern

82 page Diagram Implementation.

Maze에 대한 대부분의 세부사항은 무시하고 만들어지는 방법에 포커싱하였지만 기본적인 범위 안에서 최소한 돌아가도록 코드로 구현

MapSite: room 에 enter를 진행하면 위치가 바뀌고 문에 들어가는 경우 열려있으면 다음 방으로 들어가고, 닫혀있으면 다침
MapSite 클래스를 Room, Wall, Door 클래스가 상속하여 공통적으로 가지고 있는 `Enter()` 메서드로 구현
아직 방의 위치가 바뀌었다는 내용은 구현하지 않았음

## Abstract Factory

### Intention

상세화된 서브클래스(specifying concrete classes) 정의 없이도 서로 관련성이 있거나 의존적인 여러 객체의 군을 생성하기 위한 인터페이스를 제공

> := Kit

### Motivation

Example:

> Presentation Manager User Interface

look and feel 표준에 상관없이 프로그램이 이식성을 가지려면, application 이 각 사용자 인터페이스 툴킷에서 제공하는 위젯을 직접 사용하지 못하도록 해야 한다.

- 위젯은 캡슐화를 시켜서 직접 사용하지 못하도록 한다.

기본 유형의 위젯을 생성하기위한 인터페이스를 정의하는 추상 WidgetFactory 클래스를 정의하여 이 문제를 해결할 수 있습니다.
또한 각 종류의 위젯에 대한 추상 클래스가 있으며 구체적인 하위 클래스는 특정 Look and Feel 표준을 위한 위젯을 구현합니다.

### Applicability

- a system should be independent of how its products are created, composed, and represented.
객체가 생성, 구성, 표현되는 방식과 무관하게 독립적인 시스템

- a system should be configured with one of multiple families of products.
여러 제품군 중 하나를 선택해서 시스템을 설정해야 하는 경우.

- a family of related product objects is designed to be used together, and you need to enforce this constraint.
관련된 제품 객체들이 함께 사용되도록 디자인되고, 이 제약이 외부에도 지켜지도록 하고 싶은 경우

- you want to provide a class library of products, and you want to reveal just their interfaces, not their implementations.
제품에 대한 클래스 라이브러리를 제공하고, 그 구현이 아닌 인터페이스를 노출시키고 싶을 때

> DB2API 객체를 예로들 수 있음 - python 의 경우 https://www.python.org/dev/peps/pep-0249/

### Participants

- AbstractFactory (WidgetFactory)
abstract 제품 객체를 생성하는 연산으로 인터페이스 정의
Glyph 객체의 개념을 정의

- ConcreteFactory (MotifWidgetFactory, PMWidgetFactory)
구체적인 제품 객체를 생성하는 연산을 구현

- AbstractProduct (Window, ScrollBar)
abstract 제품 객체의 연산에 대한 인터페이스 정의

- ConcreteProduct (MotifWindow, MotifScrollBar)
ConcreteFactory 로부터 생성된 제품 객체를 정의
AbstractProduct 인터페이스를 구현

- Client
AbstractFactory 와 AbstractProduct 클래스로부터 정의된 인터페이스만 사용.

### Collaborations

- ConcreteFactory 클래스의 인스턴스 하나가 일반적으로 런타임에 만들어짐.
이 concrete factory 는 특정 구현을 갖는 제품 객체를 생성.
단사여야 한다(서로다른 제품 객체는 서로다른 concrete factory 를 사용).

- AbstractFactory 는 필요한 제품 객체를 생성하는 책임을 ConcreteFactory 로 위임(defers).
