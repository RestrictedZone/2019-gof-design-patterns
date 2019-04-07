import graphviz as gv

af = gv.Digraph('AF', filename='af.gv', format='png')

af.graph_attr.update(rankdir='BT')

with af.subgraph(
        name='cluster_0',
        graph_attr={'style': 'invis'},
        node_attr={'shape': 'record'},
        edge_attr={'arrowhead': 'empty'}
) as factory:
    factory.node('AbstractFactory',
                 label='{AbstractFactory | CreateProductA() \l CreateProductB() \l}')
    factory.node('ConcreteFactory2',
                 label='{ConcreteFactory2 | CreateProductA() \l CreateProductB() \l}')
    factory.node('ConcreteFactory1',
                 label='{ConcreteFactory1 | CreateProductA() \l CreateProductB() \l}')
    factory.edges([
        ('ConcreteFactory1', 'AbstractFactory'),
        ('ConcreteFactory2', 'AbstractFactory'),
    ])

af.node('Client')

with af.subgraph(
        name='cluster_1',
        graph_attr={'style': 'invis'},
        node_attr={'shape': 'record'},
        edge_attr={'arrowhead': 'empty'}
) as product:
    product.node('AbstractProductA')
    product.node('ProductA2')
    product.node('ProductA1')
    product.edges([
        ('ProductA2', 'AbstractProductA'),
        ('ProductA1', 'AbstractProductA'),
    ])

with af.subgraph(
        name='cluster_2',
        graph_attr={'style': 'invis'},
        node_attr={'shape': 'record'},
        edge_attr={'arrowhead': 'empty'}
) as product:
    product.node('AbstractProductB')
    product.node('ProductB2')
    product.node('ProductB1')
    product.edges([
        ('ProductB2', 'AbstractProductB'),
        ('ProductB1', 'AbstractProductB'),
    ])


af.attr(
    'edge',
    style='dashed',
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
