import graphviz as gv

af = gv.Digraph(
    'AF',
    filename='af.gv',
    format='png',
    graph_attr={'rankdir': 'BT', 'style': 'invis'},
    node_attr={'shape': 'record'},
    edge_attr={'arrowhead': 'empty'},
)

with af.subgraph(name='cluster_0') as factory:
    factory.node(
        'AbstractFactory',
        label=r'{AbstractFactory|CreateProductA()\lCreateProductB()\l}'
    )
    factory.node(
        'ConcreteFactory2',
        label=r'{ConcreteFactory2|CreateProductA()\lCreateProductB()\l}'
    )
    factory.node(
        'ConcreteFactory1',
        label=r'{ConcreteFactory1|CreateProductA()\lCreateProductB()\l}'
    )
    factory.edges([
        ('ConcreteFactory1', 'AbstractFactory'),
        ('ConcreteFactory2', 'AbstractFactory'),
    ])

with af.subgraph(name='cluster_1') as product:
    with product.subgraph(name='cluster_A') as cluster:
        cluster.node('AbstractProductA')
        cluster.node('ProductA2')
        cluster.node('ProductA1')
        cluster.edges([
            ('ProductA2', 'AbstractProductA'),
            ('ProductA1', 'AbstractProductA'),
        ])

    with product.subgraph(name='cluster_B') as cluster:
        cluster.node('AbstractProductB')
        cluster.node('ProductB2')
        cluster.node('ProductB1')
        cluster.edges([
            ('ProductB2', 'AbstractProductB'),
            ('ProductB1', 'AbstractProductB'),
        ])
    product.edge('AbstractProductB', 'ProductA1', style='invis')
    product.edge('AbstractProductB', 'ProductA2', style='invis')

af.node('Client')

af.attr(
    'edge',
    style='dashed',
    arrowhead='normal',
    constraint='false',
)

af.edges([
    ('ConcreteFactory1', 'ProductA1'),
    ('ConcreteFactory2', 'ProductA2'),
    ('ConcreteFactory1', 'ProductB1'),
    ('ConcreteFactory2', 'ProductB2'),
])

af.attr(
    'edge',
    style='solid',
)
af.edges([
    ('Client', 'AbstractFactory'),
    ('Client', 'AbstractProductA'),
    ('Client', 'AbstractProductB'),
])

af.view()
