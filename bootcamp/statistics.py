"""
Statistical helper functions.

This module focuses on small, easy-to-reason-about helpers that can be reused
across bootcamp exercises. The median implementation previously assumed inputs
were already sorted, which produced incorrect results when callers supplied raw
lists. The function now defensively sorts data before computing the median so
callers always get the correct middle value.
"""
from __future__ import annotations

from typing import Sequence


def _validate_non_empty(values: Sequence[float]) -> None:
    """Validate that ``values`` contains at least one item."""

    if not values:
        raise ValueError("values must be non-empty")


def mean(values: Sequence[float]) -> float:
    """Return the arithmetic mean of a non-empty sequence of numbers."""

    _validate_non_empty(values)
    return sum(values) / len(values)


def median(values: Sequence[float]) -> float:
    """Return the median of a non-empty sequence of numbers.

    The list is sorted inside the function so callers do not need to pre-sort
    their inputs. When the input length is even, the function returns the
    average of the two central values.
    """

    _validate_non_empty(values)

    ordered = sorted(values)
    mid = len(ordered) // 2

    # Odd-length sequences return the middle item directly.
    if len(ordered) % 2:
        return ordered[mid]

    # Even-length sequences average the two middle items.
    return (ordered[mid - 1] + ordered[mid]) / 2
