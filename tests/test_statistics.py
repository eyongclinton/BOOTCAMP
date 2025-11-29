import pytest

from bootcamp.statistics import mean, median


def test_mean_calculates_average():
    assert mean([2, 4, 6, 8]) == 5


def test_mean_rejects_empty_iterable():
    with pytest.raises(ValueError):
        mean([])


def test_median_orders_unsorted_input():
    # Previously this would incorrectly return 1 because the input was not
    # pre-sorted. The function now sorts internally before finding the median.
    assert median([3, 1, 2]) == 2


def test_median_handles_even_length():
    assert median([1, 2, 3, 4]) == 2.5


def test_median_rejects_empty_iterable():
    with pytest.raises(ValueError):
        median([])
